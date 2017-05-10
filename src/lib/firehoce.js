import React, { Component } from 'react';

let readSources = (context, sources) => {
  let initialState = {};
  if (typeof sources === 'function') {
    sources = sources(context.props, context.state)
  }
  let configs = Object.entries(sources).map(([state, source]) => {
    let { initial, ...opts } = source;
    initialState[state] = initial;
    return { context, state, ...opts };
  });
  return { initialState, configs };
};

let createRefs = (rebase, configs) =>
  configs.map(({ ref, setter, ...opts }) =>
    rebase.syncState(ref, opts)
  )

let createSetters = (context, configs) =>
  configs.reduce((setters, { setter, state }) => {
    if (setter) {
      setters[setter] = val =>
        context.setState(({ [state]: curr }) => ({ [state]: val(curr) }))
    }
    return setters;
  }, {})

let removeRefs = (rebase, refs) =>
  refs.map(ref => rebase.removeBinding(ref))

export default (rebase, sources) => BaseComponent =>
  class Firehoce extends Component {
    constructor(...args) {
      super(...args);
      let { initialState } = readSources(this, sources);
      this.state = initialState;
    }

    init() {
      let { configs } = readSources(this, sources);
      this.refs = createRefs(rebase, configs);
      this.setters = createSetters(this, configs);
    }

    deinit() {
      removeRefs(rebase, this.refs);
      this.refs = [];
      this.setters = [];
    }

    componentDidMount() {
      this.init();
    }

    componentWillUnmount() {
      this.deinit();
    }

    componentWillReceiveProps() {
      this.deinit();
      this.init();
    }

    render() {
      return <BaseComponent
        rebase={rebase}
        {...this.setters}
        {...this.state}
        {...this.props} />
    }
  }
