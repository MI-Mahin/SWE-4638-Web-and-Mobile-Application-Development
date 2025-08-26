import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface RecipeForm {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  prepTime: string;
  cookTime: string;
  servings: string;
}

const AddRecipeScreen = () => {
  const [recipe, setRecipe] = useState<RecipeForm>({
    title: '',
    description: '',
    category: 'Dinner',
    difficulty: 'Easy',
    prepTime: '',
    cookTime: '',
    servings: '',
  });

  const categories: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks', 'Beverages', 'Appetizers'];
  const difficulties: string[] = ['Easy', 'Medium', 'Hard'];

  const handleSave = () => {
    if (!recipe.title.trim()) {
      Alert.alert('Error', 'Please enter a recipe title');
      return;
    }
    
    Alert.alert('Success', 'Recipe saved successfully!', [
      { text: 'OK', onPress: () => router.push('/') }
    ]);
  };

  const renderPicker = (
    title: string, 
    options: string[], 
    selectedValue: string, 
    onSelect: (value: string) => void
  ) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.pickerContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.pickerOption,
              selectedValue === option && styles.pickerOptionSelected
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={[
              styles.pickerText,
              selectedValue === option && styles.pickerTextSelected
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Recipe Title *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter recipe title"
              value={recipe.title}
              onChangeText={(text: string) => setRecipe({ ...recipe, title: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Brief description of your recipe"
              value={recipe.description}
              onChangeText={(text: string) => setRecipe({ ...recipe, description: text })}
              multiline
              numberOfLines={3}
            />
          </View>

          {renderPicker('Category', categories, recipe.category, 
            (category: string) => setRecipe({ ...recipe, category }))}

          {renderPicker('Difficulty', difficulties, recipe.difficulty,
            (difficulty: string) => setRecipe({ ...recipe, difficulty }))}

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Prep Time (min)</Text>
              <TextInput
                style={styles.input}
                placeholder="15"
                value={recipe.prepTime}
                onChangeText={(text: string) => setRecipe({ ...recipe, prepTime: text })}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>Cook Time (min)</Text>
              <TextInput
                style={styles.input}
                placeholder="30"
                value={recipe.cookTime}
                onChangeText={(text: string) => setRecipe({ ...recipe, cookTime: text })}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Servings</Text>
            <TextInput
              style={styles.input}
              placeholder="4"
              value={recipe.servings}
              onChangeText={(text: string) => setRecipe({ ...recipe, servings: text })}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.photoButton}>
            <Ionicons name="camera-outline" size={24} color="#FF6B35" />
            <Text style={styles.photoButtonText}>Add Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Recipe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pickerOption: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  pickerOptionSelected: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  pickerText: {
    fontSize: 14,
    color: '#333',
  },
  pickerTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
  photoButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF6B35',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  photoButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#FF6B35',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddRecipeScreen;