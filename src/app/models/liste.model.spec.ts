import { Liste } from './liste.model';

describe('Liste', () => {
  it('should create an instance', () => {

    const mockListe: Liste = {
      endDate: "", startDate: "",
      id: 1,
      titre: 'Test Liste'
    };

    expect(mockListe).toBeTruthy();
  });
});
