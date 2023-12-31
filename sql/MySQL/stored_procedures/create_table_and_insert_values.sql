DELIMITER //

CREATE PROCEDURE crear_tabla_y_insertar_valores()
BEGIN
  CREATE TEMPORARY TABLE IF NOT EXISTS ejemplo (
    id INT NOT NULL AUTO_INCREMENT,
    valor VARCHAR(50),
    PRIMARY KEY (id)
  );
  
  INSERT INTO ejemplo (valor) VALUES ('1269'),('1270'),('1281'),('1282'),('1283'),('1284'),('1285'),('1286'),('1287'),('1288'),('1289'),('1290'),('1291'),('1 views.py:712           292'),('1293'),('1294'),('1295'),('1296'),('1297'),('1298'),('1299'),('1300'),('1301'),('1302'),('1303'),('1304'),('1305'),('1306'),('1307'),('1308'),('1309'),('1313'),('1314'),('1315'),('1316'),('1317'),('1318'),('1319'),('1334'),('1335'),('1336'),('1337'),('1338'),('1340'),('1341'),('1342'),('1346'),('1347'),('1348'),('1349'),('1350'),('1351'),('1352'),('1353'),('1355'),('1356'),('1357'),('1358'),('1359'),('1360'),('1361'),('1370'),('1476'),('2836'),('2838'),('2866'),('2872'),('2886'),('2887'),('2903'),('2905'),('2906'),('2909'),('2911'),('2935'),('2951'),('2956'),('2958'),('2973'),('2974'),('2976'),('2990'),('3014'),('3017'),('3020'),('3034'),('3036'),('3037'),('3038'),('3040'),('3062'),('3063'),('3072'),('3073'),('3076'),('3080'),('3083'),('3085'),('3087'),('3088'),('3104');
  SELECT * from ejemplo;
  DROP TEMPORARY TABLE IF EXISTS ejemplo;
END //

DELIMITER ;

CALL crear_tabla_y_insertar_valores();
DROP PROCEDURE IF EXISTS crear_tabla_y_insertar_valores;