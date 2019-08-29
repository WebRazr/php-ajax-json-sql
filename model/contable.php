<?php
include_once 'conBD.php';

$offd = $pdo->query('SELECT requests.id AS numrequests, offers.name AS nameOf, 
requests.price AS pricereq, requests.count AS countreq, operators.fio AS fiooperators  
FROM `requests` LEFT JOIN offers ON 
requests.offer_id = offers.id   
LEFT JOIN operators ON operators.id = requests.operator_id  WHERE requests.count > 2 AND operators.id = 12 OR operators.id = 10 ORDER BY requests.id
');
$fetc = $offd->fetchAll();
echo json_encode($fetc, JSON_UNESCAPED_UNICODE);
