import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-html2pdf',
  templateUrl: './html2pdf.component.html',
  styleUrls: ['./html2pdf.component.scss']
})
export class Html2pdfComponent implements OnInit{

  ngOnInit(): void {
    
  }

  ngOnChanges() {

  }

  async cetak() {
    console.log('CETAK');
    
    setTimeout(async () => {
      await this.mergePdfParalel();
    }, 500)
  }

  async mergePdfParalel() {

    // Ambil elemen-elemen HTML
    const portraitElement1 = document.getElementById('formulir-pemrek-badan-usaha-1');
    const portraitElement2 = document.getElementById('formulir-pemrek-badan-usaha-2');
    const landscapeElement3 = document.getElementById('formulir-pemrek-badan-usaha-landscape-3');

    const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

    
    if (!portraitElement1 || !portraitElement2 || !landscapeElement3) {
      console.error('One or more required elements were not found.');
      return;
    }

    // Render elemen secara paralel
    const [
      portraitCanvas1,
      portraitCanvas2,
      landscapeCanvas3,
    ] = await Promise.all([
      html2canvas(portraitElement1, { scale: 2, useCORS: true }),
      html2canvas(portraitElement2, { scale: 2, useCORS: true }),
      html2canvas(landscapeElement3, { scale: 2, useCORS: true })
    ]);

    // Konversi canvas menjadi image
    const portraitImg1 = portraitCanvas1.toDataURL('image/jpeg', 1.0);
    const portraitImg2 = portraitCanvas2.toDataURL('image/jpeg', 1.0);
    const landscapeImg3 = landscapeCanvas3.toDataURL('image/jpeg', 1.0);

    // portrait page ke-1
    pdf.addImage(portraitImg1, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    // portrait page ke-2
    pdf.addPage('a4', 'portrait');
    pdf.addImage(portraitImg2, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    //landscape page ke-3
    pdf.addPage('a4', 'landscape');
    pdf.addImage(landscapeImg3, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    // Generate Blob dari PDF
    const pdfBlob = pdf.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);

    // Tampilkan di tab baru
    window.open(blobUrl, '_blank');
  }
}
