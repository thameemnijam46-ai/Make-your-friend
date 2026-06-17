# Complete Setup Guide - Make Your Friend App

## 📋 Overview

This guide walks you through implementing all the development features we've prepared for your app, covering:
1. Backend Integration
2. Authentication System
3. State Management (Contexts)
4. UI Components
5. Testing Setup
6. CI/CD Pipelines
7. Deployment Configuration

---

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
```bash
cp .env.example .env.local
```

### Step 3: Start Development Server
```bash
npm start
```

---

## 🔐 1. Backend Integration

### API Configuration
Update `src/utils/api.ts` with your backend URL:

```typescript
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://your-api.com';
```

### Environment Variables
Create `.env.local`:
```
EXPO_PUBLIC_API_URL=https://api.yourdomain.com
EXPO_PUBLIC_APP_NAME=Make Your Friend
EXPO_PUBLIC_VERSION=1.0.0
```

### Required API Endpoints
Your backend needs to implement:
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update profile
- `GET /users/discover` - Discover people
- `GET /users/:id/friends` - Get friends
- `POST /users/:id/friend-requests` - Send request
- `POST /users/:id/messages` - Send message

---

## 🔑 2. Authentication System

### Login Flow
1. User enters email/password
2. Submit to API
3. Receive JWT token
4. Store token in localStorage
5. Set user in AuthContext

### File Structure
```
src/
├── screens/
│   ├── LoginScreen.tsx      ✅ Ready
│   └── SignUpScreen.tsx     ✅ Ready
├── contexts/
│   └── AuthContext.tsx      ✅ Ready
└── utils/
    └── api.ts               ✅ Ready
```

### Usage Example
```typescript
import { useAuth } from '@/contexts/AuthContext';

export default function MyComponent() {
  const { user, login, logout, isLoading } = useAuth();
  
  return (
    <View>
      {user ? (
        <Text>Welcome, {user.name}!</Text>
      ) : (
        <Button label="Login" onPress={() => login(email, password)} />
      )}
    </View>
  );
}
```

---

## 🎯 3. State Management (Contexts)

### Three Contexts Available

#### AuthContext
- Manages user authentication
- Stores user profile
- Handles login/signup/logout

#### FriendContext
- Manages friend list
- Handles friend requests
- Tracks pending requests

#### MessageContext
- Manages conversations
- Handles message sending/receiving
- Tracks unread messages

### Usage Pattern
```typescript
import { useAuth } from '@/contexts/AuthContext';
import { useFriend } from '@/contexts/FriendContext';
import { useMessage } from '@/contexts/MessageContext';

export default function MyComponent() {
  const { user } = useAuth();
  const { friends, sendFriendRequest } = useFriend();
  const { conversations, sendMessage } = useMessage();
  
  // Your component logic
}
```

---

## 🎨 4. UI Components

### Available Components

#### Button
```typescript
<Button
  label="Click Me"
  onPress={() => handleClick()}
  variant="primary"      // primary, secondary, danger, success
  size="medium"          // small, medium, large
  loading={false}
  fullWidth
  icon="heart"
/>
```

#### TextInput
```typescript
<TextInput
  label="Email"
  placeholder="your@email.com"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  error={emailError}
/>
```

#### Card
```typescript
<Card style={{ marginTop: 10 }}>
  <Text>Content goes here</Text>
</Card>
```

#### LoadingSpinner
```typescript
<LoadingSpinner 
  fullScreen={true}
  size="large"
  color="#6366f1"
/>
```

#### ErrorBanner
```typescript
<ErrorBanner
  message="Something went wrong"
  onDismiss={() => setError(null)}
/>
```

---

## 🧪 5. Testing Setup

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

### Test Structure
```
src/
├── __tests__/
│   ├── components/
│   │   └── Button.test.tsx
│   ├── contexts/
│   │   └── AuthContext.test.tsx
│   └── screens/
│       └── LoginScreen.test.tsx
```

### Example Test
```typescript
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/components/Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Button label="Click me" onPress={() => {}} />
    );
    expect(getByText('Click me')).toBeDefined();
  });
});
```

---

## 🔄 6. CI/CD Pipelines

### GitHub Actions Workflows

#### Test Workflow (`.github/workflows/test.yml`)
- Runs on every push and PR
- Tests on Node 18.x and 20.x
- Runs: tests, linter, type-check

#### Build Workflow (`.github/workflows/build.yml`)
- Runs on main branch push
- Builds Android APK
- Runs tests first

### Set GitHub Secrets
Go to Settings → Secrets and add:
```
EXPO_TOKEN=your-expo-token
EXPO_ANDROID_KEYSTORE_BASE64=base64-encoded-keystore
EXPO_APPLE_ID=your-apple-id@email.com
EXPO_APPLE_ID_PASSWORD=app-specific-password
EXPO_ASC_APP_ID=your-app-id
```

---

## 📱 7. Deployment Configuration

### Local Build

#### Android
```bash
npm run build:android
```

#### iOS
```bash
npm run build:ios
```

### Production Deployment

#### Setup EAS
```bash
npm install -g eas-cli
eas login
eas project:init
```

#### Build Production
```bash
npm run build:android    # Android APK
npm run build:ios        # iOS IPA
```

#### Submit to Stores
```bash
npm run submit:android   # Google Play
npm run submit:ios       # App Store
```

---

## 🐳 8. Docker & Backend Services

### Start Backend Services
```bash
docker-compose up
```

Services:
- **Node Backend**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

### Stop Services
```bash
docker-compose down
```

---

## 📝 9. Code Quality

### Linting
```bash
npm run lint        # Check for errors
npm run lint:fix    # Auto-fix errors
```

### Type Checking
```bash
npm run type-check
```

### Code Formatting
```bash
npm run format
```

---

## 📚 Project Structure

```
make-your-friend/
├── src/
│   ├── contexts/          # State management
│   │   ├── AuthContext.tsx
│   │   ├── FriendContext.tsx
│   │   └── MessageContext.tsx
│   ├── screens/           # App screens
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── SignUpScreen.tsx
│   │   ├── DiscoverScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── MessagesScreen.tsx
│   ├── components/        # Reusable components
│   │   ├── Button.tsx
│   │   ├── TextInput.tsx
│   │   ├── Card.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBanner.tsx
│   ├── navigation/        # Navigation setup
│   │   └── Navigation.tsx
│   ├── utils/             # Utility functions
│   │   └── api.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   └── __tests__/         # Test files
├── .github/workflows/     # CI/CD pipelines
│   ├── test.yml
│   └── build.yml
├── App.tsx                # Main app component
├── package.json
├── tsconfig.json
├── jest.config.js
├── eas.json
├── docker-compose.yml
├── CONTRIBUTING.md
├── DEPLOYMENT.md
└── README.md
```

---

## 🛠️ Available NPM Scripts

```bash
# Development
npm start                 # Start dev server
npm run android          # Run on Android
npm run ios              # Run on iOS
npm run web              # Run on web

# Testing
npm test                 # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report

# Code Quality
npm run lint            # Check for lint errors
npm run lint:fix        # Auto-fix lint errors
npm run type-check      # Check TypeScript types
npm run format          # Format code with Prettier

# Building
npm run build:android   # Build Android APK
npm run build:ios       # Build iOS IPA

# Deployment
npm run submit:android  # Submit to Google Play
npm run submit:ios      # Submit to App Store
```

---

## 🐛 Troubleshooting

### Issue: "Module not found @/..."
**Solution**: Check `tsconfig.json` paths configuration

### Issue: "localStorage is not defined"
**Solution**: Add check: `typeof window !== 'undefined'`

### Issue: Tests failing
**Solution**: 
```bash
rm -rf node_modules
npm install
npm test
```

### Issue: Expo build fails
**Solution**:
```bash
eas credentials
eas build --platform android --non-interactive
```

---

## 📖 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up environment: `cp .env.example .env.local`
3. ✅ Update API URLs in `.env.local`
4. ✅ Start development: `npm start`
5. ✅ Test features locally
6. ✅ Set up GitHub secrets for CI/CD
7. ✅ Push code to repository
8. ✅ Deploy to app stores

---

## 📞 Support

For issues or questions:
1. Check `CONTRIBUTING.md` for contribution guidelines
2. Review `DEPLOYMENT.md` for deployment help
3. Check GitHub Issues
4. Contact maintainers

---

## 📄 License

MIT License - See LICENSE file for details
