import { ChangeDetectorRef, Component, OnInit, AfterViewInit  } from '@angular/core';
import { PagingInfo } from '../models/paging-info.model';
import { uploadADKWrapper } from '../models/asset-upload-adk-wrapper';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.scss']
})
export class RegexComponent {
  title = 'Upload ADK Data Koreksi BPK';

  //parameter untuk baca excel
  arrayBuffer: any;
  file!: File;
  isUploaded = false;
  kodeSatker = '';
  errorValidasi2!: string;
  totalErrorValidasi!: string;
  file_name!: string;
  file_target: any;

  allDataLists = [] as uploadADKWrapper[];
  dataCSV = [] as uploadADKWrapper[];

  params = new Map<string, any>();
  dataLists = [] as uploadADKWrapper[];
  totalRowCount = 0;
  loadingTable: boolean = false;
  pagingInfo = new PagingInfo();
  cols = [
    { field: 'no', header: 'No', align: 'center', width: '30px' },
    { field: 'ba', header: 'BA', align: 'center', width: '30px' },
    { field: 'es1', header: 'Es1', align: 'center', width: '30px' },
    { field: 'kodeSatker', header: 'Kode Satker', align: 'center', width: '50px' },
    { field: 'uakpb', header: 'Kode UAKPB', align: 'center', width: '130px' },
    { field: 'kodeBarang', header: 'Kode Barang', align: 'center' },
    { field: 'nup', header: 'NUP', align: 'center', width: '30px' },
    { field: 'nomor', header: 'Nomor Dokumen Koreksi', align: 'center', width: '50px' },
    { field: 'nilaiBrutoSemula', header: 'Nilai Aset (Bruto) Semula', format: 'currency' },
    { field: 'nilaiBrutoMenjadi', header: 'Nilai Aset (Bruto) Menjadi', format: 'currency' },
    { field: 'selisihBruto', header: 'Selisih Nilai Bruto', format: 'currency' },
    { field: 'nilaiBukuSemula', header: 'Nilai Buku Semula', format: 'currency' },
    { field: 'nilaiBukuMenjadi', header: 'Nilai Buku Menjadi', format: 'currency' },
    { field: 'selisihNilaiBuku', header: 'Selisih Nilai Buku', format: 'currency' },
    { field: 'statAsetSemula', header: 'Status Aset Semula', align: 'center' },
    { field: 'statusAsetMenjadi', header: 'Status Aset Menjadi', align: 'center' },
    { field: 'kuantitasLuasSemula', header: 'Kuantitas (Luas) Semula', align: 'center', format: 'currency' },
    { field: 'kuantitasLuasMenjadi', header: 'Kuantitas (Luas) Menjadi', align: 'center', format: 'currency' },
    { field: 'selisihLuas', header: 'Selisih Luas', align: 'center', format: 'currency', width: '40px' },
    { field: 'keterangan', header: 'Keterangan', align: 'center' , width: '100px' },
  ];

  disableUpload: boolean = true;
  disableSearch: boolean = true;
  disableBatal: boolean = true;
  disableChooseFile: boolean = false;
  disableValidasi: boolean = true;
  disableProses: boolean = true;
  disableDownload: boolean = true;

  uploadedFiles: any[] = [];
  csvRecords: any[] = [];
  sysdate = new Date;

  
  constructor(
    private cdr: ChangeDetectorRef,
    // public ref: DynamicDialogRef,
    public confirmationService: ConfirmationService,
    public router: Router,
    public messageService: MessageService,
    private downloadService: ServicesService,
  ) {
  }

  ngOnInit() {
    this.disableChooseFile = false;
    
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }


  populateList(csvRecords : any) {
    this.allDataLists = csvRecords;
    this.totalRowCount = csvRecords.length;
    this.updateDisplayedData();
  }

  updateDisplayedData() {
    // Pastikan bahwa pagingInfo sudah terdefinisi
    if (!this.pagingInfo) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Paging information is not available.'});
      return;
    }
  
    const startIndex = (this.pagingInfo.currentPage! - 1) * this.pagingInfo.pageSize!;
    const endIndex = startIndex + this.pagingInfo.pageSize!;
    this.dataLists = this.allDataLists.slice(startIndex, endIndex);
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  incomingfile(event : any, fileInput : any){
    this.file = event.files[0];
    this.file_name = this.file.name;
    this.file_target = event;
    this.disableUpload = false;
    this.allDataLists = [];
    this.uploadListener();
    fileInput.clear();
  }

  uploadListener() {
    this.disableUpload = false;
    this.loadingTable = true;

    if (this.isValidCSVFile(this.file)) {
      let reader = new FileReader();
      reader.readAsText(this.file_target.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
      
        let headersRow = this.getHeaderArray(csvRecordsArray);
        if (headersRow.length === 20) {
          let results = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
          this.allDataLists = results || [];  // Menetapkan array kosong sebagai nilai default
          if (results && results.length > 0) {
            this.populateList(this.allDataLists);
            this.pagingInfo = new PagingInfo();
            this.disableBatal = false;
            this.disableUpload = true;
            this.disableValidasi = false;
            this.loadingTable = false;
          } else {
            this.batal();
            this.loadingTable = false;
          }
        } else {
          this.loadingTable = false;
          this.confirmationService.confirm({
            key: 'ok-confirm-dialog',
            header: 'Informasi',
            acceptVisible: true,
            rejectVisible: false,
            message: 'Jumlah kolom data yang akan diupload tidak sesuai dengan format',
            accept: () => {
              this.batal();
            },
          });
        }
      };

      reader.onerror = function () {
        alert('Error saat membaca file');
      };
    } else {
      alert('Mohon masukan file .csv.');
      this.batal();
      this.loadingTable = false;
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let csvRecord = <string>csvRecordsArray[i];
      if (csvRecord === "" || csvRecord === ",") {
        // console.log(`SKIP: Empty or invalid record at index ${i}`);
        continue; //skip data kosong
    }
      console.log('BEFORE: ', csvRecord);

      // Menangani pola "", "" menjadi "0"
      let tempRecord = csvRecord.replace(/,\s*""""\s*,/g, ',"0",');

      // Mengganti koma di dalam tanda kutip dengan placeholder untuk memudahkan split
      tempRecord = tempRecord.replace(/(""[^""]+"")/g, function(match) {
          return match.replace(/,/g, '|');
      });

      let csvFile = tempRecord.split(',');
      let cleanedData = csvFile.map(item => {
        // Mengembalikan placeholder | menjadi koma dan menghilangkan tanda kutip ganda
        item = item.replace(/\|/g, ',').replace(/^""|""$/g, '');
        // Menghilangkan titik dari format angka
        item = item.replace(/^\s*(\d{1,3}(?:\.\d{3})+)\s*$/g, (match, number) => number.replace(/\./g, ''));
        // Menghilangkan titik dari angka yang diapit tanda kurung
        item = item.replace(/^\s*\((\d{1,3}(?:\.\d{3})+)\)\s*$/g, (match, number) => number.replace(/\./g, ''));
        // Menghilangkan koma dari format angka yang diapit tanda kurung
        item = item.replace(/^\s*\((\d{1,3}(?:,\d{3})+)\)\s*$/g, (match, number) => number.replace(/,/g, ''));
        // Menghilangkan koma dari angka tanpa tanda kurung, termasuk spasi berlebih
        item = item.replace(/^\s*(\d{1,3}(?:,\d{3})+)\s*$/g, (match, number) => number.replace(/,/g, ''));
        // Menghilangkan tanda kurung, tanda kutip tunggal, dan karakter lain
        return item.replace(/[()"']/g, '').trim();
      });

      if (cleanedData.every(item => item === '')) {
        // console.log(`RESULT: Empty data produced from processing at index ${i}`);
        continue; // Skip data kosong
      }
        console.log("AFTER: ", cleanedData);
        // console.log("cleanedData.length: ", cleanedData.length);

      if(cleanedData.length != headerLength) {
        let dataCSVnotValid = [];
        dataCSVnotValid = cleanedData;
        // console.log('DATA TIDAK VALID ', dataCSVnotValid[0]);
        
        this.confirmationService.confirm({
          key: 'ok-confirm-dialog',
          header: 'Info',
          message: 'Terdapat penulisan data csv dengan no :' + dataCSVnotValid[0] + ' belum sesuai.',
          accept: () => {
            this.batal();
          } 
        });
        return;
      } 
      else if (cleanedData.length === headerLength) {
        let variabel: string | number = "";
        let csvRecord: uploadADKWrapper = new uploadADKWrapper();

        csvRecord.no = Number(cleanedData[0]);
        csvRecord.ba = cleanedData[1];
        csvRecord.es1 = cleanedData[2];
        csvRecord.kodeSatker = cleanedData[3];
        csvRecord.uakpb = cleanedData[4];
        csvRecord.kodeBarang = cleanedData[5];
        csvRecord.nup = Number(cleanedData[6]);
        csvRecord.nomor = cleanedData[7];
        csvRecord.dokumenKoreksi = "";
        csvRecord.nilaiBrutoSemula = Number(cleanedData[8]);
        csvRecord.nilaiBrutoMenjadi = Number(cleanedData[9]);
        csvRecord.selisihBruto = Number(cleanedData[10]);
        csvRecord.nilaiBukuSemula = Number(cleanedData[11]);
        csvRecord.nilaiBukuMenjadi = Number(cleanedData[12]);
        csvRecord.selisihNilaiBuku = Number(cleanedData[13]);
        csvRecord.statAsetSemula = cleanedData[14];
        csvRecord.statusAsetMenjadi = cleanedData[15];
        csvRecord.kuantitasLuasSemula = Number(cleanedData[16]);
        csvRecord.kuantitasLuasMenjadi = Number(cleanedData[17]);
        csvRecord.selisihLuas = Number(cleanedData[18]);
        csvRecord.keterangan = cleanedData[19];
        csvRecord.flagKoreksi = 0;
        csvRecord.statusValidasi = "";


        csvArr.push(csvRecord);
        this.dataCSV = csvArr;
      }
    }
    // console.log("LENGTH DATA CSV ", this.dataCSV.length);
    
    return csvArr;
  }

  getHeaderArray(csvRecordsArr: string[]): string[] {
    let headers = (<string>csvRecordsArr[0]).split(',');
    return headers.map(header => header.trim());
  }


  batal() {
    this.allDataLists = [];
    this.populateList(this.allDataLists);
    this.pagingInfo = new PagingInfo();
    this.disableChooseFile = false;
    this.disableUpload = true;
    this.disableValidasi = true;
    this.disableSearch = true;
    this.disableBatal = true;
  }

  onLazyLoad(event : any) {
    this.pagingInfo.currentPage = Math.floor(event.first / event.rows) + 1;
    this.pagingInfo.pageSize = event.rows;
    const startIndex = event.first;
    const endIndex = event.first + event.rows;
    this.dataLists = this.allDataLists.slice(startIndex, endIndex);
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  download() {
    const fileUrl = 'assets/files/testUploadADK.csv';
    const fileName = 'upload-adk.csv';

    this.downloadService.downloadFile(fileUrl).subscribe(blob => {
      this.downloadService.saveFile(blob, fileName);
    });
  }

}
