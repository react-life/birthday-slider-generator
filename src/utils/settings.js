export const slideSettings = [
  {
    title: 'Background image',
    fields: [
      {
        name: 'backgroundImage',
        label: 'URL',
        type: 'text',
      },
      {
        name: 'backgroundSize',
        label: 'Size',
        type: 'select',
        items: ['auto', 'cover', 'contain'],
      },
      {
        name: 'backgroundRepeat',
        label: 'Repeat',
        type: 'select',
        items: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
      },
      [
        {
          name: 'backgroundPositionX',
          label: 'Position',
          type: 'select',
          items: ['left', 'right', 'center'],
        },
        {
          name: 'backgroundPositionY',
          type: 'select',
          items: ['top', 'bottom', 'center'],
        }
      ],
      [
        {
          name: 'backgroundOffsetX',
          label: 'Offset',
          type: 'text',
        },
        {
          name: 'backgroundOffsetY',
          type: 'text',
        }
      ]
    ]
  }
]