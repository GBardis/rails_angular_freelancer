export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string,
  ) { }
}

// 15,'acd company',"http://portofolio.georgebardis.com","Ruby on rails",150,120,15,"georgebardis@gmail.com"
