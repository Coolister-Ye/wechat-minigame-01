class fileSaver() {
  constructor(fileName){
    this.fs = wx.getFileSystemManager();
    fs.writerFileSync(`${wx.env.USER_DATA_PATH}/fileName`, '')
  };
}
