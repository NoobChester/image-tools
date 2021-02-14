const { i18n: { Messages } } = require('powercord/webpack');
const { ContextMenu } = require('powercord/components');

module.exports.getQuickLensSettings = function ({ get, set }) {
  return [
    ...ContextMenu.renderRawItems([
      {
        type: 'checkbox',
        name: Messages.IMAGE_TOOLS_DISABLE_LENS,
        defaultState: get('disableLens', false),
        onToggle: (v) => set('disableLens', v)
      },
      {
        type: 'checkbox',
        name: Messages.IMAGE_TOOLS_DISABLE_ANTI_ALIASING,
        defaultState: get('disableAntiAliasing', false),
        onToggle: (v) => set('disableAntiAliasing', v)
      },
      {
        type: 'slider',
        name: Messages.IMAGE_TOOLS_ZOOM_RATIO,
        value: get('zoomRatio', 2),
        minValue: 1,
        maxValue: 15,
        onChange: (v) => set('zoomRatio', v.toFixed(1)),
        renderValue: (v) => `${v.toFixed(1)}x`
      },
      {
        type: 'slider',
        name: Messages.IMAGE_TOOLS_LENS_RADIUS,
        value: get('lensRadius', 50),
        minValue: 50,
        maxValue: 700,
        onChange: (v) => set('lensRadius', v.toFixed(1)),
        renderValue: (v) => `${v.toFixed(1)}px`
      }
    ])
  ];
};
