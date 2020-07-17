import { _2To10 } from 'simple-base-converter';

interface RequestDTO {
  binaryNumber: string;
}

class ConvertDecToBinService {
  public execute({ binaryNumber }: RequestDTO): string {
    const convertedNumber = _2To10(binaryNumber);
    return convertedNumber;
  }
}

export default ConvertDecToBinService;
