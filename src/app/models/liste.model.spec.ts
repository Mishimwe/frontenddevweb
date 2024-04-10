import { Liste } from './liste.model';

describe('Liste', () => {
  it('should create an instance', () => {
    // Create an object that matches the Liste interface
    const mockListe: Liste = {
      id: 1,
      titre: 'Test Liste'
    };

    // Since interfaces are not tangible objects, you don't actually instantiate them
    // Instead, you're simply verifying that the object conforms to the structure of the Liste interface
    expect(mockListe).toBeTruthy();
  });
});
