import { useState, useMemo } from 'react';

export function useSearchParams(search, defaults = {}) {
  const initial = useMemo(() => new SearchParams(search, defaults, update), []); // eslint-disable-line react-hooks/exhaustive-deps

  const [Params, setParams] = useState(initial);

  function update() {
    setParams(new Params());
  }

  return Params;
}

function SearchParams(search, defaults, update, instance) {
  instance = instance || new URLSearchParams(search);

  const _SearchParams = SearchParams.bind(
    null,
    search,
    defaults,
    update,
    instance,
  );

  _SearchParams.append = instance.append.bind(instance);
  _SearchParams.entries = instance.entries.bind(instance);
  _SearchParams.forEach = instance.forEach.bind(instance);
  _SearchParams.getAll = instance.getAll.bind(instance);
  _SearchParams.has = instance.has.bind(instance);
  _SearchParams.keys = instance.keys.bind(instance);
  _SearchParams.sort = instance.sort.bind(instance);
  _SearchParams.toString = instance.toString.bind(instance);
  _SearchParams.values = instance.values.bind(instance);

  _SearchParams.set = set;
  _SearchParams.get = get;
  _SearchParams.delete = _delete;

  function get() {
    const name = arguments[0];
    const exists = instance.has(name);

    return exists ? instance.get.apply(instance, arguments) : defaults[name];
  }

  function set() {
    update();

    return instance.set.apply(instance, arguments);
  }

  function _delete() {
    update();

    return instance.delete.apply(instance, arguments);
  }

  return _SearchParams;
}

export { default as cn } from 'classnames';
