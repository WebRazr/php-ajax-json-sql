<?php
include_once 'conBD.php';
$offdTwo = $pdo->query('SELECT  offers.name AS nameOf,
 SUM(requests.count) AS countreq, SUM(requests.price) AS pricereq
FROM offers LEFT JOIN `requests` ON 
requests.offer_id = offers.id GROUP BY offers.id 
');
$fetcTwo = $offdTwo->fetchAll();
echo json_encode($fetcTwo, JSON_UNESCAPED_UNICODE);