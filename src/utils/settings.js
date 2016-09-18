export const slideSettings = [
  {
    title: 'Background',
    fields: [
      {
        tabs: [
          {
            label: 'URL',
            name: 'backgroundImage',
            type: 'text',
          },
          {
            label: 'Google Images',
            name: 'imageQuery',
            type: 'text',
          },
        ]
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
          items: [
            {
              'value': '0%',
              'label': 'left',
            },
            {
              'value': '100%',
              'label': 'right',
            },
            {
              'value': '50%',
              'label': 'center',
            }
          ]
        },
        {
          name: 'backgroundPositionY',
          type: 'select',
          items: [
            {
              'value': '0%',
              'label': 'top',
            },
            {
              'value': '100%',
              'label': 'bottom',
            },
            {
              'value': '50%',
              'label': 'center',
            }
          ]
        }
      ],
      [
        {
          name: 'backgroundOffsetX',
          label: 'Offset',
          type: 'text',
          hint: 'You can drag image',
        },
        {
          name: 'backgroundOffsetY',
          type: 'text',
          hint: 'on the slide!'
        }
      ]
    ]
  },
  {
    title: 'Background video',
    fields: [
      {
        name: 'videoSrc',
        label: 'Sources (mp4, ogg or webm)',
        hint: 'few sources devide by commas',
        type: 'text',
        handler: value => {
          return value.split(',');
        }
      },
      [
        {
          name: 'videoWidth',
          label: 'Width',
          type: 'text',
          hint: 'px or %',
        },
        {
          name: 'videoHeight',
          label: 'Height',
          type: 'text',
        }
      ],
      [
        {
          name: 'videoOffsetX',
          label: 'Offset left',
          type: 'text',
          hint: 'px or %',
        },
        {
          name: 'videoOffsetY',
          label: 'Offset top',
          type: 'text',
        },
      ],
      {
        name: 'videoControls',
        label: 'Controls',
        type: 'checkbox',
        labelPosition: 'left',
      },
      {
        name: 'videoAutoplay',
        label: 'Autoplay',
        type: 'checkbox',
        labelPosition: 'left',
      },
    ]
  }
]