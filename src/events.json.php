<?php
date_default_timezone_set('UTC');

function iCalDecoder($file)
{
  $ical = file_get_contents($file);

  preg_match_all('/(BEGIN:VEVENT.*?END:VEVENT)/si', $ical, $result, PREG_PATTERN_ORDER);
  for ($i = 0; $i < count($result[0]); $i++) {
    $calLine = $result[0][$i];



    // Get the start
    $calStartDate = getInbetween($calLine, "DTSTART", "DTEND");
    $calStartDate = getInbetween($calStartDate, "TZID=Europe/Brussels:", " ");
    $calStartDate = getInbetween($calStartDate, ":", "Z");
    $SDstart = (strtotime($calStartDate) * 1000);

    //var_dump($calStartDate);

    // Get the end
    $calEndDate = getInbetween($result[0][$i], "DTEND", "DTSTAMP");
    $calEndDate = getInbetween($calEndDate, ":", "Z");
    $SDend = (strtotime($calEndDate) * 1000) - 72001000;

    // Get the organisation
    $calSummary = getInbetween($calLine, "SUMMARY:", "\r\nTRANSP");
    $summaryArray = explode(" | ", $calSummary);

    $SDorganisator = "Thraso";

    $SDid = $i;
    $SDtitle = end($summaryArray);

    $SDclass = "event-warning";
    $SDurl = '#';

    if (preg_match('/DESCRIPTION:(.*)LAST-MODIFIED/si', $result[0][$i], $regs)) {
      $description = $regs[1];
      if(strpos($description, 'ype:')){
        $type = preg_replace('/\s*/', '', reset(explode("\\n", end(explode("ype: ", $regs[1])))));

        switch($type){
          case "cantus":
            $SDclass = "event-info";
            break;

          case "activiteit":
            $SDclass = "event-important";
            break;
        }
      }

      if(strpos($description, 'rl:')){
        $file = 'http://' . preg_replace('/\s*/', '', reset(explode("\\n", end(explode("rl: ", $regs[1])))));
        $file_headers = @get_headers($file);
        if($file_headers != NULL && $file_headers[0] != 'HTTP/1.1 404 Not Found') {
          $SDurl = $file;
          $SDtitle .= " <i class='fa fa-external-link' aria-hidden='true' > </i>";
        }
      }
    }



    $eventArray[] = array(
      "id"            => (string) $SDid,
      "title"         => $SDtitle,
      "organisator"   => $SDorganisator,
      "url"           => $SDurl,
      "class"         => $SDclass,
      "start"         => $SDstart,
      "end"           => $SDend
    );
  }

  $preparedArray = array(
    "success"   => 1,
    "result"    => $eventArray
  );

  return json_encode($preparedArray);
}

function getInbetween($string, $begin, $end){
  return end(explode($begin, reset(explode($end, $string))));
}

echo iCalDecoder('https://calendar.google.com/calendar/ical/jouw-link-naar-de-ical-van-de-club.ics');
?>
