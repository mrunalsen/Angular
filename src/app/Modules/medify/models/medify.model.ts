export class Medical {
    public medical: string;
    public number: number;
    public address: string;
    

    constructor(
      medical: string,
      number: number,
      address: string
    ) {
      this.medical = medical;
      this.number = number;
      this.address = address;
    }
};
export class Prescription {
    public name: string;
    public diseas: string;
    public status: string;
    public medical: string;
    public time: string;

    constructor(
      name: string,
      diseas: string,
      status: string,
      medical: string,
      time: string
    ) {
      this.name = name;
      this.diseas = diseas;
      this.status = status;
      this.medical = medical;
      this.time = time;  
    }
};

export class Patient {
  public name: string;
  public gender: string;
  public age: number;
  public time: string;
  public mobile: number;

  constructor(
    name: string,
    gender: string,
    age: number,
    time: string,
    mobile: number,
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.time = time;  
    this.mobile = mobile;
  }
};