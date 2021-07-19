/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import Pre from './Pre'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, map, ...rest }) => {
    rest = { MapPost: map, ...rest }
    const MapPost = map
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} {...MapPost} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
