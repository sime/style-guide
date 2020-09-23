module.exports = {
  components: {
    categories: [
      {
        name: 'Basics',
        include: [
          'src/components/text/Text.jsx',
          'src/components/text/merge/Link/Link.jsx',
          'src/components/text/merge/TextBit/TextBit.jsx',
          'src/components/text/merge/Headline/Headline.jsx',
          'src/components/subject-icons/merge/SubjectIcon/SubjectIcon.jsx',
          'src/components/math-symbols/merge/MathSymbol/MathSymbol.jsx',
          'src/components/logo/Logo.jsx',
          'src/components/icons/Icon.jsx',
        ],
      },
      {
        name: 'Components',
        include: [
          'src/components/buttons/Button.jsx',
          'src/components/counters/merge/Counter/Counter.jsx',
          'src/components/dropdowns/Dropdown.jsx',
          'src/components/labels/Label.jsx',
          'src/components/avatar/Avatar.jsx',
          'src/components/bubble/Bubble.jsx',
          'src/components/file-handler/FileHandler.jsx',
          'src/components/rating/Rating.jsx',
          'src/components/spinner/Spinner.jsx',
          'src/components/flash-messages/FlashMessage.jsx',
          'src/components/form-elements/merge/Select/Select.jsx',
          'src/components/form-elements/merge/Input/Input.jsx',
          'src/components/form-elements/merge/TextArea/TextArea.jsx',
          'src/components/form-elements/merge/Radio/Radio.jsx',
          'src/components/form-elements/merge/Checkbox/Checkbox.jsx',
          'src/components/search/Search.jsx',
        ],
      },
      {
        name: 'Containers',
        include: [
          'src/components/spinner-container/SpinnerContainer.jsx',
          'src/components/flex/Flex.jsx',
          'src/components/box/Box.jsx',
          'src/components/media/merge/Media/Media.jsx',
          'src/components/overlayed-box/merge/OverlayedBox/OverlayedBox.jsx',
        ],
      },
    ],
    wrapper: './src/wrappers/UXPinWrapper.jsx',
    webpackConfig: './uxpin.webpack.config.js',
  },
  name: 'Brainly - Style Guide',
};
