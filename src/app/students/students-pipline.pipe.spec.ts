import { StudentsPiplinePipe } from './students-pipline.pipe';

describe('StudentsPiplinePipe', () => {
  it('create an instance', () => {
    const pipe = new StudentsPiplinePipe();
    expect(pipe).toBeTruthy();
  });
});
