import { DomainPipe } from './domain.pipe';

describe('DomainPipe', () => {
  it('create an instance', () => {
    const pipe = new DomainPipe();
    expect(pipe).toBeTruthy();
  });

  it('when passed a domain with http removes prefix', () => {
    const pipe = new DomainPipe();

    var result = pipe.transform(`http://www.example.com`)
    expect(result).toBe(`example.com`);
  });

  it('when passed a domain with https removes prefix', () => {
    const pipe = new DomainPipe();

    var result = pipe.transform(`https://www.example.com`)
    expect(result).toBe(`example.com`);
  });

  it('when passed a domain with folder specifiers removes suffixes', () => {
    const pipe = new DomainPipe();

    var result = pipe.transform(`https://www.example.com/test/2`)
    expect(result).toBe(`example.com`);
  });
});
