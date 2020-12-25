<?php
$bkg = [
    0 => ["10", "650", "blur", "blur", "px"],
    1 => ["1", "100", "grey", "grayscale", "%"],
    2 => ["1", "200", "bright", "brightness", "%"],
    3 => ["1", "200", "contrast", "contrast", "%"],
];

foreach($bkg as $filter) {
    print '<ul><li>
        <p><strong><span class="t-red">data-filter=</span><span class="t-blue">&quot;'.$filter[2].'&quot;</span></strong></p>
        <p>The values starting at '.$filter[0].'</p>
        <p>CSS Equivalent: <span class="t-red">filter: </span><span class="t-blue">'.$filter[3].'('.$filter[0]. $filter[4].')</span></p>
        <p><img data-filter="'.$filter[2].' '.$filter[0].'" alt="CSS Library" src="https://cdn.pixabay.com/photo/2020/12/15/16/25/clock-5834193_960_720.jpg" height="200" width="200" /></p>
        <p>The values ending at '.$filter[1].'</p>
        <p>CSS Equivalent: <span class="t-red">filter: </span><span class="t-blue">'.$filter[3].'('.$filter[1]. $filter[4].')</span></p>';
        if ($filter[1] <= 201) {
            print('
        <p><img data-filter="'.$filter[2].' '.$filter[1].'" alt="CSS Library" src="https://cdn.pixabay.com/photo/2020/12/15/16/25/clock-5834193_960_720.jpg" height="200" width="200" /></p>
    </li></ul>');
        } else {
            print('
        </li></ul>');
        }
}
?>