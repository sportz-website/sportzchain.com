
<table border="1" style="display:none;">
<thead>
<tr>
<th>Sr.</th>
<th>Name</th>
<th>Email id</th>
<th>Phone Number</th>
<th>Twitter</th>
<th>Telegram</th>
<th>Joining Date</th>
</tr>
</thead>
<?php
// File name
$filename="Kerala".date('Y-m-d h:i:sa');
// Fetching data from data base

$con = mysqli_connect("localhost", "sprotz", "sprotzsprotz", "sprotz");

$query=mysqli_query($con,'select * from user where team="Kerala"');
$cnt=1;
while ($row=mysqli_fetch_array($query)) {
?>
            <tr>
                <td><?php echo $cnt;  ?></td>
                <td><?php echo $row['name'];?></td>
                <td><?php echo $row['email'];?></td>
                <td><?php echo $row['mobile'];?></td>
                <td><?php echo $row['twitter'];?></td>
                <td><?php echo $row['telegram'];?></td>
                 <td><?php echo $row['date'];?></td>
            </tr>
<?php
$cnt++;
// Genrating Execel  filess
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=".$filename."-Report.xls");
header("Pragma: no-cache");
header("Expires: 0");
} ?>
</table>