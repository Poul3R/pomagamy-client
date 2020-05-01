import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

const errorHandler = (error: HttpErrorResponse) => {
  return throwError(error);
};

export {errorHandler};
