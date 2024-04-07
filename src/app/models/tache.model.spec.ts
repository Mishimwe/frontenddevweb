import { Tache } from './tache.model';

describe('Tache', () => {
  it('should create an instance of Tache', () => {
    const testTache: Tache = {
      id: 1,
      liste: {
        id: 1
      },
      titre: 'Test Tache',
      status: false
    };
    expect(testTache).toBeTruthy();
  });
});
