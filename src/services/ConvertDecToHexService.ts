import { _10To16 } from 'simple-base-converter';

interface RequestDTO {
  decimalNumber: string;
}

class ConvertDecToBinService {
  public execute({ decimalNumber }: RequestDTO): string {
    const convertedNumber = _10To16(decimalNumber);
    return convertedNumber;
  }
}

export default ConvertDecToBinService;
