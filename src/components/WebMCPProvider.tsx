'use client'

const toolDefs = [
  { name: 'get_pricing', description: 'Get detailed pricing information for all AIVized AI chatbot tiers (Starter, Growth, Scale) including monthly cost, features, and limitations.', inputSchema: { type: 'object', properties: { tier: { type: 'string', enum: ['starter', 'growth', 'scale', 'all'], description: 'Specific pricing tier to look up. Use "all" for all tiers.' } } } },
  { name: 'get_services', description: 'Get information about AIVized managed AI chatbot services including features, use cases, and industry applications.', inputSchema: { type: 'object', properties: { category: { type: 'string', enum: ['all', 'restaurant', 'real_estate', 'ecommerce', 'healthcare'], description: 'Filter services by industry category.' } } } },
  { name: 'get_case_studies', description: 'Get AIVized case studies and success stories showing how businesses use our AI chatbot service.', inputSchema: { type: 'object', properties: { industry: { type: 'string', enum: ['all', 'restaurant', 'real_estate'], description: 'Filter case studies by industry.' } } } },
  { name: 'contact_sales', description: 'Get contact information and sales inquiry details for AIVized.', inputSchema: { type: 'object', properties: { topic: { type: 'string', enum: ['general', 'sales', 'partnership', 'support'], description: 'Reason for contact.' } } } },
  { name: 'search_site', description: 'Search across the entire AIVized website for content, blog posts, pricing, and features by keyword.', inputSchema: { type: 'object', properties: { query: { type: 'string', description: 'Search terms.' } }, required: ['query'] } },
]

const code = `(function(){var t=${JSON.stringify(toolDefs)};var m=(document.modelContext||navigator.modelContext);if(!m)return;var r=m.registerTool||m.provideContext;if(!r)return;t.forEach(function(t){try{r.call(m,{name:t.name,description:t.description,inputSchema:t.inputSchema,annotations:{readOnlyHint:true},execute:function(){return Promise.resolve({ok:!0,tool:t.name})}},{signal:(new AbortController).signal})}catch(e){}})})()`

export function WebMCPProvider() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
