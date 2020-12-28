import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(url: string): string {
    if (url) {
      if (url.length > 3) {
        let result;
        let match;
        if (match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^:\/\n?=]+)/im)) {
          result = match[1];
          if (match = result.match(/^[^.]+\.(.+\..+)$/))
            result = match[1];
        }
        return result;
      }
      return url;
    }
    return url;
  }

}
