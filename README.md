# Make Your Friend

A mobile app designed to help you make new friends based on shared interests and connections.

## Features

- **Discover People**: Browse profiles of people with similar interests
- **Connection Management**: Send and accept friend requests
- **Messaging**: Chat with your new friends
- **Profile Management**: Create and customize your profile
- **Interest Matching**: Find people who share your interests

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for navigation
- **Axios** for API calls
- **Ionicons** for UI icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thameemnijam46-ai/Make-your-friend.git
cd Make-your-friend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your API endpoint

### Running the App

**Start the development server:**
```bash
npm start
```

**Run on Android:**
```bash
npm run android
```

**Run on iOS:**
```bash
npm run ios
```

**Run on Web:**
```bash
npm run web
```

## Project Structure

```
src/
├── screens/          # Screen components
│   ├── HomeScreen.tsx
│   ├── DiscoverScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/       # Navigation configuration
│   └── Navigation.tsx
├── components/       # Reusable components
├── services/         # Business logic & API calls
├── utils/           # Utility functions
│   └── api.ts
└── types/           # TypeScript type definitions
    └── index.ts
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Development

### Adding a New Screen

1. Create a new file in `src/screens/`
2. Export the component as default
3. Add navigation route in `src/navigation/Navigation.tsx`

### API Integration

Use the `api` utility in `src/utils/api.ts` to make API calls:

```typescript
import { api } from '@/utils/api';

const response = await api.getUser(userId);
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@makeyourfriend.app or open an issue on GitHub.

## Roadmap

- [ ] User authentication & verification
- [ ] Advanced profile creation
- [ ] Real-time messaging
- [ ] Photo uploads
- [ ] Video chat
- [ ] User reporting & safety features
- [ ] Analytics dashboard