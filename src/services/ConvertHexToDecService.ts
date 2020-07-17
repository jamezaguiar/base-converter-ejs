import { _16To10 } from 'simple-base-converter';

interface RequestDTO {
  hexadecimalNumber: string;
}

class ConvertDecToBinService {
  public execute({ hexadecimalNumber }: RequestDTO): string {
    const convertedNumber = _16To10(hexadecimalNumber);
    return convertedNumber;
  }
}

export default ConvertDecToBinService;
