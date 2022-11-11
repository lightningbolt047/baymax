import 'package:flutter/material.dart';
import 'package:telehealth/const.dart';

class PageSubheading extends StatelessWidget {
  final String subheadingName;
  const PageSubheading({Key? key,required this.subheadingName}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(subheadingName,style: const TextStyle(
            color: backgroundColor,
            fontSize: 25,
            fontWeight: FontWeight.w600,
          ),),
          SizedBox(
            width: MediaQuery.of(context).size.width*0.75,
            child: const Divider(
              thickness: 0.5,
              color: Colors.grey,
            ),
          ),
        ],
      ),
    );
  }
}
