import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'item',
  title: 'Menu Items',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required()
    }),    
    defineField({
      name: 'price',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable interactive crop & focus
        metadata: ['lqip', 'palette'] // Optional metadata you can extract
      },
      validation: Rule => Rule.required()
    })
  ],
})