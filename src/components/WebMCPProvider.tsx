'use client'

import { useEffect } from 'react'

const tools = [
  {
    name: 'get_pricing',
    description: 'Get detailed pricing information for all AIVized AI chatbot tiers (Starter, Growth, Scale) including monthly cost, features, and limitations.',
    inputSchema: {
      type: 'object',
      properties: {
        tier: {
          type: 'string',
          enum: ['starter', 'growth', 'scale', 'all'],
          description: 'Specific pricing tier to look up. Use "all" for all tiers.',
        },
      },
    },
    execute: async (input: { tier?: string }) => {
      const response = await fetch('/pricing', { headers: { 'Accept': 'text/html' } })
      const html = await response.text()
      const tier = input.tier || 'all'
      return { tier, source: '/pricing' }
    },
  },
  {
    name: 'get_services',
    description: 'Get information about AIVized managed AI chatbot services including features, use cases, and industry applications.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['all', 'restaurant', 'real_estate', 'ecommerce', 'healthcare'],
          description: 'Filter services by industry category.',
        },
      },
    },
    execute: async (input: { category?: string }) => {
      return { category: input.category || 'all', source: '/' }
    },
  },
  {
    name: 'get_case_studies',
    description: 'Get AIVized case studies and success stories showing how businesses use our AI chatbot service.',
    inputSchema: {
      type: 'object',
      properties: {
        industry: {
          type: 'string',
          enum: ['all', 'restaurant', 'real_estate'],
          description: 'Filter case studies by industry.',
        },
      },
    },
    execute: async (input: { industry?: string }) => {
      return { industry: input.industry || 'all', source: '/' }
    },
  },
  {
    name: 'contact_sales',
    description: 'Get contact information and sales inquiry details for AIVized. This is for when a user wants to get in touch, book a demo, or ask about partnership opportunities.',
    inputSchema: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          enum: ['general', 'sales', 'partnership', 'support'],
          description: 'Reason for contact.',
        },
      },
    },
    execute: async (input: { topic?: string }) => {
      return {
        email: 'aivized.com@gmail.com',
        topic: input.topic || 'general',
        booking_url: '/',
      }
    },
  },
  {
    name: 'search_site',
    description: 'Search across the entire AIVized website for content, blog posts, pricing, and features by keyword.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search terms to find on the site.',
        },
      },
      required: ['query'],
    },
    execute: async (input: { query: string }) => {
      return { query: input.query, source: '/' }
    },
  },
]

export function WebMCPProvider() {
  useEffect(() => {
    const mc = (document as any).modelContext
    if (!mc?.registerTool) return

    const controllers = tools.map(() => new AbortController())

    Promise.all(
      tools.map((tool, i) =>
        mc.registerTool(
          {
            name: tool.name,
            description: tool.description,
            inputSchema: tool.inputSchema,
            annotations: { readOnlyHint: true },
            execute: tool.execute,
          },
          { signal: controllers[i].signal },
        ),
      ),
    )

    return () => {
      controllers.forEach((c) => c.abort())
    }
  }, [])

  return null
}
