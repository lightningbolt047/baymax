import 'package:flutter/material.dart';
import 'package:telehealth/const.dart';
import 'package:telehealth/screens/login_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tele Health',
      theme: ThemeData(
        useMaterial3: true,
        colorSchemeSeed: seedColor,
      ),
      home: const LoginScreen(),
    );
  }
}
