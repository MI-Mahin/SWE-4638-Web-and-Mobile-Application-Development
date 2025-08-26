import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="recipe-details" options={{ 
          title: 'Recipe Details',
          headerShown: true,
          headerStyle: { backgroundColor: '#FF6B35' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }} />
        <Stack.Screen name="edit-recipe" options={{ 
          title: 'Edit Recipe',
          headerShown: true,
          headerStyle: { backgroundColor: '#FF6B35' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }} />
        <Stack.Screen name="cooking-mode" options={{ 
          title: 'Cooking Mode',
          headerShown: true,
          headerStyle: { backgroundColor: '#FF6B35' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }} />
      </Stack>
    </>
  );
}