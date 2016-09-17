export const slideSettings = [
  {
    title: 'Background color',
    fields: [
      {
        name: 'backgroundColor',
        ComponentName: 'SketchPicker',
        valueProp: 'color'
      }
    ]
  }, {
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
        values: ['auto', 'cover', 'contain'],
      },
      {
        name: 'backgroundRepeat',
        label: 'Repeat',
        type: 'select',
        values: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
      },
      [
        {
          name: 'backgroundPositionX',
          label: 'Position',
          type: 'select',
          values: ['left', 'right', 'center'],
        },
        {
          name: 'backgroundPositionY',
          type: 'select',
          values: ['top', 'bottom', 'center'],
        }
      ]
    ]
  }
]