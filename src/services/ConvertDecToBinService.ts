import { _10To2 } from 'simple-base-converter';

interface RequestDTO {
  decimalNumber: string;
}

class ConvertDecToBinService {
  public execute({ decimalNumber }: RequestDTO): string {
    const convertedNumber = _10To2(decimalNumber);
    return convertedNumber;
  }
}

export default ConvertDecToBinService;
