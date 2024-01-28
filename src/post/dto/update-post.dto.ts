import { User } from 'src/user/entities/user.entity';

export class UpdatePostDto {
  title?: string;
  content?: string;
  userId?: User;
}
