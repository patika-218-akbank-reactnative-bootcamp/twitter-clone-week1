module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@twitter/assets': './src/assets',
          '@twitter/components': './src/components',
          '@twitter/constants': './src/constants',
          '@twitter/navigation': './src/navigation',
          '@twitter/hooks': './src/hooks',
          '@twitter/provider': './src/provider',
          '@twitter/screens': './src/screens',
          '@twitter/screens': './src/screens',
        },
      },
    ],
  ],
};
