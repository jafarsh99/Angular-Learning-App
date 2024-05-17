export class PagingInfo {
  currentPage?: number;
  pageCount?: number;
  pageSize?: number;
  retrieveAll?: boolean;

  constructor() {
    // Default values
    this.currentPage = 1;
    this.pageCount = 0;
    this.pageSize = 10;
    this.retrieveAll = false;
  }

  public static create(currentPage?:any, pageSize?:any): PagingInfo {
    if(currentPage !== null && pageSize !== null) {
      let pageInfo: PagingInfo = new PagingInfo();
      pageInfo.currentPage = currentPage;
      pageInfo.pageSize = pageSize;

      return pageInfo;
    } else {
      return new PagingInfo();
    }

  }

  public static createWithRetrieveAllStatus(currentPage?:any, pageSize?:any, retrieveAllStatus?:boolean): PagingInfo {
    if(currentPage !== null && pageSize !== null) {
      let pageInfo: PagingInfo = new PagingInfo();
      pageInfo.currentPage = currentPage;
      pageInfo.pageSize = pageSize;
      pageInfo.retrieveAll = retrieveAllStatus;
      return pageInfo;
    } else {
      let pageInfo: PagingInfo = new PagingInfo();
      pageInfo.retrieveAll = retrieveAllStatus;
      return pageInfo;
    }

  }

  public static createToRetrieveAll() {
    const pagingInfo = new PagingInfo();
    pagingInfo.retrieveAll = true;
    return pagingInfo;
  }
}
