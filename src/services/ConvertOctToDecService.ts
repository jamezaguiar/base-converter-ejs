import { _8To10 } from 'simple-base-converter';

interface RequestDTO {
  octalNumber: string;
}

class ConvertDecToBinService {
  public execute({ octalNumber }: RequestDTO): string {
    const convertedNumber = _8To10(octalNumber);
    return convertedNumber;
  }
}

export default ConvertDecToBinService;
