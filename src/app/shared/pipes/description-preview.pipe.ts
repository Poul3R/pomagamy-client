import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'descriptionPreview'})
export class DescriptionPreviewPipe implements PipeTransform {
  transform(value: string, limit: number = 300): string {
    if (value.length > limit) {
      return value.slice(0, limit - 3) + '...';
    } else {
      return value;
    }
  }
}
