export class NoticeInterface {
  id: string;
  name: string;
  city: string;
  phone?: string;
  email: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  priority: boolean;
}
