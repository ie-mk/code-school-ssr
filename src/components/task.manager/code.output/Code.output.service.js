class CodeOutputService {
  constructor() {
    return new Proxy(this, {
      get: (t, k) => {
        if (!this.instance) return this[k];

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
