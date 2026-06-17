import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface User {
  id: string;
  name: string;
  age: number;
  interests: string[];
  image: string;
}

export default function DiscoverScreen() {
  const [users, setUsers] = React.useState<User[]>([
    {
      id: '1',
      name: 'Sarah',
      age: 25,
      interests: ['Photography', 'Travel', 'Music'],
      image: '👩',
    },
    {
      id: '2',
      name: 'Alex',
      age: 28,
      interests: ['Gaming', 'Tech', 'Sports'],
      image: '👨',
    },
  ]);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleLike = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePass = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const currentUser = users[currentIndex];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover People</Text>
        <Text style={styles.subtitle}>Find people with similar interests</Text>
      </View>

      {currentUser && (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Text style={styles.emoji}>{currentUser.image}</Text>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.nameAgeContainer}>
                <Text style={styles.name}>{currentUser.name}</Text>
                <Text style={styles.age}>{currentUser.age}</Text>
              </View>

              <View style={styles.interestsContainer}>
                <Text style={styles.interestLabel}>Interests</Text>
                <View style={styles.interestTags}>
                  {currentUser.interests.map((interest, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{interest}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[styles.button, styles.passButton]}
              onPress={handlePass}
            >
              <Ionicons name="close-circle" size={32} color="#ef4444" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.likeButton]}
              onPress={handleLike}
            >
              <Ionicons name="heart" size={32} color="#ec4899" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Ionicons name="information-circle" size={20} color="#3b82f6" />
        <Text style={styles.infoText}>
          Swipe or tap the buttons below to discover more people
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#06b6d4',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#cffafe',
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  imageContainer: {
    height: 300,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 120,
  },
  cardContent: {
    padding: 20,
  },
  nameAgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  age: {
    fontSize: 18,
    color: '#6b7280',
  },
  interestsContainer: {
    gap: 10,
  },
  interestLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    textTransform: 'uppercase',
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bae6fd',
  },
  tagText: {
    fontSize: 12,
    color: '#0369a1',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  passButton: {
    backgroundColor: '#fee2e2',
  },
  likeButton: {
    backgroundColor: '#fce7f3',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#0c4a6e',
  },
});