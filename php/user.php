<?php


try {
    // подключаемся к серверу
$conn = new PDO("sqlsrv:Server=Z;Database=JEWELRY","Admin", "Admin"/*, array(PDO::SQLSRV_ATTR_DIRECT_QUERY => true)*/);
    $query = 'SELECT * FROM Products';   
    $stmt = $conn->query( $query );   
    while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ) {   
       print_r( $row );   
    } 
    echo "Database connection established";
    
    $conn = null;
}
catch (PDOException $e) {
    echo $e->getMessage();
}



?>