#!/usr/bin/perl -w
use CGI;
use DBI;
my $cgi = new CGI;
my $account = $cgi->param('account');

$DB_user = 'nckucampus';
$DB_pwd = 'yoman';
$DB_name = 'nckucampus';

$dbh = DBI->connect("dbi:mysql:database=$DB_name;",$DB_user,$DB_pwd) or die "Connect Error";
$SQL= "select account from 5_user where account = '$account'";

$selectRecord = $dbh->prepare($SQL);
$selectRecord->execute();
$ref = $selectRecord->fetchrow_hashref();

print "Content-type: text/html\n\n"; # HTTP header
print "\'$account\'";
if($ref){
	print " is uesd";
      }
else{
	print " is OK!!!";
}
$dbh->disconnect();
