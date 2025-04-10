# Google App

A React Native application that replicates Google's search experience with features like text search, voice search, and Google Lens functionality.

## Features

- Google-like search interface
- Voice search capability
- Google Lens for image-based search
- Tab-based search results (All, Images, Videos, Shopping, News, Forums)
- Modern, clean UI that follows Google's design language

## Prerequisites

- Node.js (v14 or newer)
- Yarn package manager
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Java Development Kit (JDK)

## Getting Started

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd google-app
   ```

2. Install dependencies:

   ```
   yarn
   ```

3. Set up environment:
   - For iOS (macOS only):
     ```
     cd ios && pod install && cd ..
     ```

### Running the Application

#### Android

To run the app on an Android device or emulator:

```
yarn android
```

Make sure you have an Android emulator running or a physical device connected with USB debugging enabled.

#### iOS (macOS only)

To run the app on an iOS simulator:

```
yarn ios
```

### Development

- To start the Metro bundler without building the app:
  ```
  yarn start
  ```

## Troubleshooting

### Common Issues

- **Build failures**: Make sure you have the correct versions of Android SDK, JDK, and build tools installed.

  ```
  yarn clean
  ```

- **Metro bundler issues**: Try resetting the cache:

  ```
  yarn start --reset-cache
  ```

- **Device not connecting**: Ensure USB debugging is enabled and the device is authorized.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
