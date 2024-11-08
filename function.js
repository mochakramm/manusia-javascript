class manusia  {
    constructor(nama, usia, kelamin, hobi) {
      // Class members and methods
      this.nama = nama
      this.usia = usia
      this.kelamin = kelamin
      this.hobi = hobi
    }
    
    bertahanhidup(){
      return `${this.nama} harus bekerja untuk bertahan hidup`
    }
  
  }
  
  class pria extends manusia {
      constructor (nama, usia, hobi) {
          super(nama, usia, true, hobi)
      }
  }
  
  class wanita extends manusia {
      constructor (nama, usia, hobi) {
          super(nama, usia, false, hobi)
      }
  }

module.exports = {manusia, pria, wanita}
  