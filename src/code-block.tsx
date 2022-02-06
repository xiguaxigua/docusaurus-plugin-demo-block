import React, { Component } from 'react'
import CodeBlock from '@theme-init/CodeBlock'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { DemoBlock } from './components/demo-block'
import { CodeBlockPropsType } from './types'

const withLiveEditor = (Comp: typeof Component) => {
  function WrappedComponent(props: CodeBlockPropsType) {
    const { vanilla, vue, react } = props
    if (vanilla || vue || react) {
      return (
        <BrowserOnly fallback={<>loading...</>}>
          {() => <DemoBlock {...props} />}
        </BrowserOnly>
      )
    }

    return <Comp {...props} />
  }

  return WrappedComponent
}

export default withLiveEditor(CodeBlock)
