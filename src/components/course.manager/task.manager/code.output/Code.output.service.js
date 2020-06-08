class CodeOutputService {
  constructor() {
    return new Proxy(this, {
      get: (t, k) => {
        if (k === 'setup') return this.setup;

        return this.instance[k];
      },
      set: () => false,
    });
  }

  setup = instance => {
    this.instance = instance;

    this.resolve();
  };

  promise = new Promise(resolve => {
    this.resolve = resolve;
  });
}

export const codeOutputService = new CodeOutputService();
