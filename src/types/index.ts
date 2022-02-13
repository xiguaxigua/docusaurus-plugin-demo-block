type CodeType = 'vanilla' | 'vue' | 'react'

type TransformReturnValue = {
  html: string
  css: string
  js: string
  originJs: string
  type: CodeType
  libs: string[]
}

interface CodeBlockPropsType {
  children: string
  metastring: string
  vue: boolean
  react: boolean
  vanilla: boolean
}

export { CodeType, TransformReturnValue, CodeBlockPropsType }
